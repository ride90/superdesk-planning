from setuptools import setup, find_packages

with open('README.md', 'r') as f:
    long_description = f.read()

DESCRIPTION = 'Superdesk Planning Module'

package_data = {
    'planning': [
        'templates/*.txt',
        'templates/*.html'
    ]
}

setup(
    name="superdesk-planning",
    version="1.33.1",
    description=DESCRIPTION,
    long_description=long_description,
    long_description_content_type='text/markdown',
    package_dir={'': 'server'},
    packages=find_packages('server'),
    package_data=package_data,
    include_package_data=True,
    author='Edouard Richard',
    author_email='edouard.richard@sourcefabric.org',
    license='AGPLv3',
    install_requires=[
        'icalendar>=4.0.3,<4.1',
        'deepdiff==3.3.0'
    ],
    url='https://github.com/superdesk/superdesk-planning',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Environment :: Plugins',
        'Framework :: Flask',
        'Intended Audience :: Developers',
        'Intended Audience :: Information Technology',
        'Intended Audience :: System Administrators',
        'License :: OSI Approved :: GNU Affero General Public License v3',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.6',
        'Topic :: Database',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
        'Topic :: Internet :: WWW/HTTP :: WSGI :: Application',
        'Topic :: Multimedia'
    ],
    python_requires='~=3.5'
)
