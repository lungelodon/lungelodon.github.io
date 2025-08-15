#!/usr/bin/env python3
"""
Script to create downloadable project ZIP files
Run this script to generate compressed project folders
"""

import zipfile
import os
from pathlib import Path

def create_project_zip(project_name, files_list, output_path):
    """Create a ZIP file for a project with specified files"""
    
    with zipfile.ZipFile(output_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file_info in files_list:
            file_path = file_info['path']
            archive_name = file_info['archive_name']
            
            if os.path.exists(file_path):
                zipf.write(file_path, archive_name)
            else:
                print(f"Warning: File {file_path} not found")
    
    print(f"Created {output_path}")

# Define project files
projects = {
    'telecom-churn-analysis': [
        {'path': 'telecom-churn-data.csv', 'archive_name': 'data/telecom-churn-data.csv'},
        {'path': 'telecom-churn-analysis.sql', 'archive_name': 'sql/churn-analysis.sql'},
        {'path': 'telecom-churn-analysis.py', 'archive_name': 'python/churn-analysis.py'},
        {'path': 'project-analysis-reports.md', 'archive_name': 'reports/analysis-report.md'},
    ],
    'global-sales-performance': [
        {'path': 'global-sales-data.csv', 'archive_name': 'data/global-sales-data.csv'},
        {'path': 'global-sales-analysis.sql', 'archive_name': 'sql/sales-analysis.sql'},
        {'path': 'project-analysis-reports.md', 'archive_name': 'reports/analysis-report.md'},
    ],
    'hr-employee-attrition': [
        {'path': 'hr-attrition-data.csv', 'archive_name': 'data/hr-attrition-data.csv'},
        {'path': 'hr-attrition-analysis.sql', 'archive_name': 'sql/attrition-analysis.sql'},
        {'path': 'project-analysis-reports.md', 'archive_name': 'reports/analysis-report.md'},
    ]
}

# Create ZIP files
for project_name, files in projects.items():
    output_file = f"{project_name}.zip"
    create_project_zip(project_name, files, output_file)

print("All project ZIP files created successfully!")
print("Upload these ZIP files to your project-files directory:")