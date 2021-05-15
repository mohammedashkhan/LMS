import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
// import moment from 'moment';

import { deleteCourse } from '../../../actions/course';
import useStyles from './styles';

const Course = ({ course, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

 

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={course.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={course.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{course.name}</Typography>
        {/* <Typography variant="body2">{moment(course.createdAt).fromNow()}</Typography> */}
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textPrimary" className={classes.names} component="h2">{course.courseName}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2"><b>Department: </b>{course.courseDept}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p"><b>Description: </b>{course.description}</Typography>
        <Typography variant="body2" color="textSecondary" component="p"><b>Room: </b>{course.courseRoom}</Typography>
        <Typography variant="body2" color="textSecondary" component="p"><b>Whitlist Capacity: </b>{course.waitListCapacity}</Typography>
        <Typography variant="body2" color="textSecondary" component="p"><b>Team: </b>{course.courseTeam}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likecourse(post._id))}>
          <Likes />
        </Button> */}
        {/* {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default Course;
