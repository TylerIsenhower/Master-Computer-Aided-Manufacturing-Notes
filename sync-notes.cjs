const fs = require('fs');
const path = require('path');

const MASTER_SOURCE = path.join(__dirname, '..', 'MMET 380', 'MMET 380 Master Guide.md');
const NOTES_DEST = path.join(__dirname, 'public', 'notes');

if (!fs.existsSync(NOTES_DEST)) {
    fs.mkdirSync(NOTES_DEST, { recursive: true });
}

function syncNotes() {
    console.log('Syncing Master Guide from Obsidian...');
    if (fs.existsSync(MASTER_SOURCE)) {
        fs.copyFileSync(MASTER_SOURCE, path.join(NOTES_DEST, 'master.md'));
        console.log('Master Guide synced successfully.');
    } else {
        console.error('Master Guide not found at:', MASTER_SOURCE);
    }
}

syncNotes();
