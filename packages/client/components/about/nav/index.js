import React from 'react'
import {Drawer, DrawerContent} from '@rmwc/drawer';
import {List, ListItem} from '@rmwc/list'
import '@material/drawer/dist/mdc.drawer.css'
import styles from './styles.scss'

const Nav = () => (
  <Drawer className={styles.drawer}>
    <DrawerContent>
      <List>
        <ListItem>Our Coaches</ListItem>
        <ListItem>Pizza</ListItem>
        <ListItem>Icecream</ListItem>
      </List>
    </DrawerContent>
  </Drawer>
)

export {Nav}

