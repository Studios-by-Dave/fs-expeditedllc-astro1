#!/usr/bin/env python3

"""
Automated Sitemap Generator for F&S Expedited LLC
This script generates a sitemap.xml file based on the pages and services in the project.
"""

import os
import sys
import re
from datetime import datetime
from pathlib import Path

# Configuration
pages_dir = Path('src/pages')
public_dir = Path('public')
output_file = public_dir / 'sitemap.xml'

# Ensure public directory exists
public_dir.mkdir(parents=True, exist_ok=True)

def get_last_modified_date(file_path):
    """Get the last modified date of a file in YYYY-MM-DD format."""
    mtime = os.path.getmtime(file_path)
    return datetime.fromtimestamp(mtime).strftime('%Y-%m-%d')

def get_static_url(filename):
    """Convert filename to URL path for static pages."""
    # Remove file extension
    name = filename.replace('.tsx', '').replace('.jsx', '').replace('.ts', '').replace('.js', '')
    
    # Map to actual URLs based on React Router configuration
    url_map = {
        'Index': '/',
        'ServicesPage': '/services',
        'WhyUsPage': '/why-us',
        'ProcessPage': '/process',
        'TestimonialsPage': '/reviews',
        'ContactPage': '/contact',
        'ServiceAreaPage': '/service-area',
        'GalleryPage': '/gallery',
        'PrivacyPolicyPage': '/privacy-policy',
        'TermsOfServicePage': '/terms-of-service'
    }
    
    return url_map.get(name, None)

def extract_slugs_from_ts_file(filepath, key_name):
    """Extract slug values from a TypeScript file."""
    slugs = []
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Use regex to find all slug values
        # Pattern: slug: "value",
        pattern = rf'{key_name}\s*:\s*"([^"]+)"'
        matches = re.findall(pattern, content)
        slugs = matches
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
    return slugs

def get_service_urls():
    """Generate URLs for all service detail pages."""
    return [f'/services/{slug}' for slug in extract_slugs_from_ts_file('src/data/services.ts', 'slug')]

def get_category_urls():
    """Generate URLs for all service category pages."""
    return [f'/services/{slug}' for slug in extract_slugs_from_ts_file('src/data/services.ts', 'slug') if slug in [
        'dump-trucks-hauling-services', 'material-delivery', 'site-services', 'emergency-expedited'
    ]]

def get_subcategory_urls():
    """Generate URLs for all service subcategory pages."""
    subcategory_map = {
        'material-delivery': ['gravel-delivery', 'sand-delivery', 'soil-delivery'],
        'site-services': ['land-clearing', 'site-prep', 'debris-removal', 'aggregate-transport', 
                         'retaining-walls', 'underground-utilities', 'land-grading'],
        'emergency-expedited': ['emergency-expedited', 'commercial-hauling', 'dump-truck-hauling']
    }
    
    urls = []
    for category, subcats in subcategory_map.items():
        for sub in subcats:
            urls.append(f'/services/{category}/{sub}')
    return urls

def get_priority(url):
    """Determine priority based on URL path."""
    if url == '/' or url == '/services':
        return '1.0'
    elif url in ['/contact', '/about', '/promos', '/process', '/service-area', '/reviews', '/gallery']:
        return '0.9'
    elif '/services/' in url:
        return '0.8'
    elif '/blog/' in url:
        return '0.7'
    else:
        return '0.5'

def get_changefreq(url):
    """Determine change frequency based on URL path."""
    if url == '/' or url == '/services' or url == '/blog':
        return 'daily'
    elif url in ['/contact', '/about', '/process', '/service-area', '/reviews', '/gallery']:
        return 'monthly'
    elif '/services/' in url or '/blog/' in url:
        return 'weekly'
    else:
        return 'monthly'

def main():
    # Main pages
    main_urls = [
        ('/', '2026-06-18'),
        ('/services', '2026-06-18'),
        ('/about', '2026-06-18'),
        ('/promos', '2026-06-18'),
        ('/process', '2026-06-18'),
        ('/service-area', '2026-06-18'),
        ('/service-area/shelby-nc', '2026-06-18'),
        ('/service-area/forest-city-nc', '2026-07-12'),
        ('/service-area/gastonia-nc', '2026-06-18'),
        ('/service-area/asheville-nc', '2026-06-18'),
        ('/gallery', '2026-06-18'),
        ('/blog', '2026-06-18'),
        ('/contact', '2026-06-18'),
        ('/reviews', '2026-06-18'),
        ('/privacy-policy', '2026-06-18'),
        ('/terms-of-service', '2026-06-18')
    ]
    
    # Service category pages
    category_urls = [
        ('/services/dump-trucks-hauling-services', '2026-06-18'),
        ('/services/material-delivery', '2026-06-18'),
        ('/services/site-services', '2026-06-18'),
        ('/services/emergency-expedited', '2026-06-18')
    ]
    
    # Sub-service pages (category/service structure)
    sub_service_urls = [
        # Material delivery sub-services
        ('/services/material-delivery/gravel-delivery', '2026-06-18'),
        ('/services/material-delivery/sand-delivery', '2026-06-18'),
        ('/services/material-delivery/soil-delivery', '2026-06-18'),
        ('/services/material-delivery/aggregate-transport', '2026-06-18'),
        # Site services sub-services
        ('/services/site-services/site-prep', '2026-06-18'),
        ('/services/site-services/land-clearing', '2026-06-18'),
        ('/services/site-services/debris-removal', '2026-06-18'),
        ('/services/site-services/retaining-walls', '2026-06-18'),
        ('/services/site-services/underground-utilities', '2026-06-18'),
        ('/services/site-services/land-grading', '2026-06-18'),
        # Emergency expedited sub-services
        ('/services/emergency-expedited/emergency-expedited', '2026-06-18'),
        ('/services/emergency-expedited/commercial-hauling', '2026-06-18'),
        ('/services/emergency-expedited/dump-truck-hauling', '2026-06-18')
    ]
    
    # Add blog article URLs
    blog_urls = [
        ('/blog/dump-trucks-expedited-local-hauling-shelby-charlotte-nc', '2026-06-18'),
        ('/blog/why-manufacturers-choose-fs-expedited-trucking-emergency-freight', '2026-06-18'),
        ('/blog/expedited-dump-truck-services-prevent-costly-project-delays-north-carolina', '2026-06-18'),
        ('/blog/why-fs-expedited-reliable-dump-truck-services-shelby-nc', '2026-06-18'),
        ('/blog/material-delivery-guide-shelby-nc-construction-projects', '2026-06-18'),
        ('/blog/why-north-carolina-calls-us-when-the-job-cant-wait', '2026-06-18'),
        ('/blog/why-topsoil-secret-healthier-greener-yard', '2026-06-18'),
        ('/blog/soil-delivery-vs-gravel-delivery-which-material-does-your-project-need', '2026-06-18'),
        ('/blog/best-dump-truck-services-asheville-nc', '2026-08-06'),
        ('/blog/dump-truck-hauling-services-forest-city-nc', '2026-08-16')
    ]
    
    urls = set(main_urls + category_urls + sub_service_urls + blog_urls)
    print(f"Found {len(urls)} total URLs for sitemap")
    
    # Generate sitemap XML
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">\n'
    
    for url, lastmod in sorted(urls):
        priority = get_priority(url)
        changefreq = get_changefreq(url)
        
        xml += '  <url>\n'
        xml += f'    <loc>https://www.fs-expeditedllc.com{url}</loc>\n'
        xml += f'    <lastmod>{lastmod}</lastmod>\n'
        xml += f'    <changefreq>{changefreq}</changefreq>\n'
        xml += f'    <priority>{priority}</priority>\n'
        xml += '  </url>\n'
    
    xml += '</urlset>'
    
    # Write sitemap to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(xml)
    
    print(f'Sitemap generated successfully: {output_file}')
    print(f'Generated {len(urls)} URLs')

if __name__ == '__main__':
    main()