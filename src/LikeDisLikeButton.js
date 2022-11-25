import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

function LikeDisLikeButton() {
    let [like, setLike] = useState(0);
    let [dislike, setDislike] = useState(0);

    return (
        <div className='button-wrapper'>
            <IconButton aria-label="like" color="primary" onClick={() => setLike(like + 1)}>
                <Badge badgeContent={like} color="primary">
                    👍
                </Badge>
            </IconButton>
            <IconButton aria-label="dislike" color="error" onClick={() => setDislike(dislike + 1)}>
                <Badge badgeContent={dislike} color="error">
                    👎
                </Badge>
            </IconButton>

        </div>
    );
}

export { LikeDisLikeButton }