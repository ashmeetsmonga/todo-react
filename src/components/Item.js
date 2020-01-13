import React from 'react';
import classes from './Item.module.css';

const item = (props) => {
	const completed = [ classes.task ];

	return (
		<div className={classes.Item}>
			<div className={completed.join(' ')}>{props.children}</div>
			<button className={classes.Delete} onClick={() => props.delete(props.index)}>
				Delete
			</button>
		</div>
	);
};

export default item;
