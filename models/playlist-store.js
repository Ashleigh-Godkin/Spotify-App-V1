'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const playlistStore = {
    store: new JsonStore('./models/playlist-store.json', {playlistCollection: [] }),
    collection: 'playlistCollection',

    getAllPlaylists() {
        return this.store.findAll(this.collection);
    },

    getPlaylist(id) {
        return this.store.findOneBy(this.collection, { id: id});
    },

}

module.exports = playlistStore;