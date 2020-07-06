import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer({ ...props }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: true,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    props.setShowDrawer(open);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Filter by Availability', 'Filter by Out of Stock'].map(text => (
          <ListItem button key={text} onClick={() => props.onFilter(text)}>
            <ListItemIcon>
              <FilterListIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={props.anchor}>
        <Drawer
          anchor={props.anchor}
          open={state[props.anchor]}
          onClose={toggleDrawer(props.anchor, false)}
        >
          {list(props.anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

TemporaryDrawer.propTypes = {
  detail: PropTypes.object,
  anchor: PropTypes.string,

  onFilter: PropTypes.func,
  setShowDrawer: PropTypes.func,
};
