import React from "react";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike + 1);
  return (
    <div>

<IconButton color ="primary" onClick={incrementLike} aria-label="like">
<Badge badgeContent={like} color="primary">
👍
</Badge>
</IconButton>

<IconButton color ="error" onClick={incrementDisLike} aria-label="dislike">
<Badge badgeContent={dislike} color="error">
👎
</Badge>
</IconButton>


    </div>
  );
}
