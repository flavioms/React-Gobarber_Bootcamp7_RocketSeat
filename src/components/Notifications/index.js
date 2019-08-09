import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import api from '~/services/api';
import {
  Container,
  Badge,
  NotificationList,
  Notification,
  Scroll,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotification() {
      const response = await api.get('notifications');
      setNotifications(response.data);
    }
  });
  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
