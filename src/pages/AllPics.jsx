import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import data from '../data/images.json';
import './AllPics.css';

const tileData = data.images;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%',
    // height: 900,
  },
}));

export default function AllPics() {
  const classes = useStyles();
  return (
    <div className="all-pics">
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.id} cols={tile.cols || 1}>
              <img src={tile.url} alt={tile.caption} />
              <GridListTileBar
                title={tile.id + 1}
                subtitle={<span>{tile.caption}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <FavoriteBorderIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}
