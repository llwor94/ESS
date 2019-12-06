import React from 'react'
import {Drawer, DrawerContent} from '@rmwc/drawer';
import {List, ListItem} from '@rmwc/list'
import '@material/drawer/dist/mdc.drawer.css'
import styles from './styles.scss'
import {useRouter} from 'next/router'

const Nav = () => {
  const router = useRouter();

  const handleRoute = (current) => {
    router.replace(`/about/?selected=${current}`, `/about/${current}`, {shallow: true})
  }

  return(
    <Drawer className={styles.drawer}>
      <DrawerContent>
        <List>
          <ListItem onClick={() => handleRoute('coaches')}>
            Our Coaches
          </ListItem>
          <ListItem onClick={() => handleRoute('faq')}>
            FAQ
          </ListItem>
          <ListItem>Icecream</ListItem>
        </List>
      </DrawerContent>
    </Drawer>
  )
}

export {Nav}

