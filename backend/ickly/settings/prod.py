from .base import *

DEBUG = False

# ALLOWED_HOSTS = ['https://ickly.herokuapp.com/',]

WEBPACK_LOADER['DEFAULT'].update({
    'BUNDLE_DIR_NAME': 'dist/',
    'STATS_FILE': os.path.join(BASE_DIR, '../webpack-stats-prod.json')
})
