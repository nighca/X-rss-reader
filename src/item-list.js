var listWrapper = $('#list-wrapper');

var Item = React.createClass({
    render: function() {
        var data = this.props.data;
        return (
            <li className="item">
                <h2 className="item-title">
                    {data.title}
                </h2>
                <p>
                {data.description}
                </p>
                <a href={data.content}>{data.content}</a>
            </li>
        );
    }
});

var ItemList = React.createClass({
    render: function(){
        var items = this.props.data.map(function(data){
            return (
                <Item data={data} />
            );
        });

        return (
            <ul>
                {items}
            </ul>
        );
    }
});

var render = function(data){
    React.render(
        <ItemList data={data} />,
        listWrapper
    );
};

module.exports = {
    render: render
};