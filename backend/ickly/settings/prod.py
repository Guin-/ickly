from .base import *

DEBUG = True

ALLOWED_HOSTS = ['*']

WEBPACK_LOADER['DEFAULT'].update({
    'BUNDLE_DIR_NAME': 'dist/',
    'STATS_FILE': os.path.join(BASE_DIR, '../webpack-stats-prod.json')
})
