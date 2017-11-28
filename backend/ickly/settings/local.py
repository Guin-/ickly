from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# Webpack Loader Config
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/',
        'STATS_FILE': os.path.join(BASE_DIR, '../webpack-stats.json'),
    }
}

