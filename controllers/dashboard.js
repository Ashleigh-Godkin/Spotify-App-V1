'use strict';

const logger = require('../utils/logger');

const playlistCollection = require('../models/playlist-store.js');
const playlistStore = require('../models/playlist-store');
const uuid = require('uuid');

const dashboard = {
    index(request, response) {
        logger.info('dashboard rendering');
        const viewData = {
            title: 'Playlist Dashboard',
            playlists: playlistStore.getAllPlaylists(),
        };
        logger.info('about to render', playlistStore.getAllPlaylists());
        response.render('dashboard', viewData);
    },
};

module.exports = dashboard;
