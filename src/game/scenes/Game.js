import { Scene } from 'phaser';
import { EventBus } from '../EventBus.js';

export class Game extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');
        
        this.load.image('star', 'star.png');
        this.load.image('background', 'bg.png');
        this.load.image('logo', 'logo.png');
        this.load.tilemapTiledJSON("map","map.json")
        this.load.image('tile01', '50a1363760360ad9f51afafb3513a77e.jpg');
    }

    create ()
    {
        
        // this.add.image(512, 384, 'background');
        // this.add.image(512, 350, 'logo').setDepth(100);
        // this.add.text(512, 490, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // }).setOrigin(0.5).setDepth(100);

        const map = this.make.tilemap({key: "map", tileHeight: 32, tileWidth: 32});
        const tileset = map.addTilesetImage("Dirt2", "tile01"); // Use same key
        const layer = map.createLayer("Tile Layer 1", tileset, 0, 0);

        EventBus.emit('current-scene-ready', this);
        
     

    }
}
