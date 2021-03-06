import React, { useContext } from 'react'
import { Item, Button, Label, Segment, Icon } from 'semantic-ui-react';
import ActivityStore from '../../../app/stores/activityStore';
import { Link } from 'react-router-dom';
import { IActivity } from '../../../app/models/activity';
import {format} from 'date-fns';

export const ActivityListItem: React.FC<{activity: IActivity}> = ({activity}) => {
    const activityStore = useContext(ActivityStore);
    const { deleteActivity, submitting, target} = activityStore;
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                <Item>
            <Item.Image size='tiny' circular src='/assets/user.png'/>
            <Item.Content>
              <Item.Header as='a'>{activity.title}</Item.Header>
              <Item.Description>
                Hosted by Bob
              </Item.Description>
            </Item.Content>
          </Item>
                </Item.Group>
               
            </Segment>
            <Segment>
                <Icon name='clock'/> {format(activity.date, 'h:mm a')}
                <Icon name='marker'/> {activity.venue}
            </Segment>
            <Segment secondary>
                Attendees will go here
            </Segment>
           
            <span>{activity.description}</span>
            <Button
                  as={Link}
                  to={`/activities/${activity.id}`}
                  floated='right'
                  content='View'
                  color='blue'
                />
            
        </Segment.Group>
        
    )
}
