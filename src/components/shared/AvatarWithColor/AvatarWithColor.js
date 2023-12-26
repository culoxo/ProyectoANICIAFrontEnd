
const getAvatarColor = (position) => {


    if (position > 9) {
        position = position % 10;
    }
    const colors = ['#145388', '#6099D3', '#ACC8ED', '#EC5757', '#F48C06', '#FFD857', '#6A994E', '#95D332', '#CBE53E', '#B4BDC3'];

    return colors[position];
}


const AvatarWithColor = (props) => {

    const style = {
        backgroundColor: getAvatarColor(props.position),
    }

    return (
        <div className="table-avatar" style={style}>
            {props.initials}
        </div>
    )
}

export default AvatarWithColor;