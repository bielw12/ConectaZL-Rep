#!/usr/bin/env python
import os
import sys

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "conectazl.settings")
    
    port = int(os.environ.get('PORT', 5000))
    
    from django.core.management import execute_from_command_line
    
    sys.argv = ['manage.py', 'runserver', f'0.0.0.0:{port}']
    execute_from_command_line(sys.argv)
