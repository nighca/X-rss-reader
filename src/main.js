var X = require('x-client');

X.connect('nighco.me:8083').config({ token: '8e685df7a1c681f3a9d9dacc881b0ce3' });
//X.connect('localhost:8083').config({ token: '57d9620b7406041429ab3fa733fe9cca' });

var Channel = X.model('channel'),
    Item = X.model('item');

window.Channel = Channel;
window.Item = Item;

var renderItemList = require('./item-list').render;

var refreshItemList = function(){
    Item.list(function(err, list){
        if(err){
            alert(err);
            return;
        }

        renderItemList(list);
    });
};

Item.on('create', refreshItemList);
refreshItemList();