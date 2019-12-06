import React from 'react'
import {List, CollapsibleList, SimpleListItem} from '@rmwc/list'
import styles from './styles.scss'

import '@material/list/dist/mdc.list.css';
import '@rmwc/list/collapsible-list.css';

const faqs = [
  {title: 'Lesson Schedule', body: 'Swim lessons are once a week for thirty minutes.'},
  {title: 'Ages', body: 'Adult or child, if you’re older than 6 months we can improve your swimming. For children we offer a Water Babies program in which parents are involved. For senior-citizens we offer a ramped entry and comfortable water temperature. For everyone in between, our advanced instructors can up your game.'},
  {title: 'Registration/Member Fee', body: 'There is no registration or monthly membership fee at Eastside Swim School.'}
];

const FAQ = () => {
  return (
    <div className={styles.wrapper}>
    <h1>Frequently Asked Questions</h1>
      <List>
        {faqs.map(x => <Item {...x} />)}
      </List>
    </div>
  )
};

export {FAQ};

const Item = ({title, body}) => (
  <CollapsibleList
    handle={
    <SimpleListItem
    text={title}
    metaIcon="chevron_right"
    />
  }>
    <div>
      {body}
    </div>
  </CollapsibleList>
)

