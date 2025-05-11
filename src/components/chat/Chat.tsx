import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../layout/Sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'

export const Chat = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false)
  const handleToggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed)

  // Sample chat list
  const chats = [
    {
      id: '1',
      name: 'Иван Петров',
      avatar: 'https://via.placeholder.com/40',
      lastMessage: 'Привет! Как дела?',
      lastMessageDate: new Date(Date.now() - 1000 * 60 * 5),
    },
    {
      id: '2',
      name: 'Мария Сидорова',
      avatar: 'https://via.placeholder.com/40/ff9800',
      lastMessage: 'Спасибо за информацию.',
      lastMessageDate: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    {
      id: '3',
      name: 'Команда поддержки',
      avatar: 'https://via.placeholder.com/40/2196f3',
      lastMessage: 'Ваш запрос обработан.',
      lastMessageDate: new Date(Date.now() - 1000 * 60 * 60 * 24),
    },
  ]

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar
        activeSection="chats"
        collapsed={sidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
      />

      <div className="flex-1 overflow-auto bg-background py-6 px-4">
        {chats.map((chat) => (
          <Link
            key={chat.id}
            to={`/chats/${chat.id}`}
            className="flex items-center p-4 mb-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
          >
            <Avatar>
              <AvatarImage src={chat.avatar} alt={chat.name} />
              <AvatarFallback>{chat.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 ml-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{chat.name}</h3>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(chat.lastMessageDate, { addSuffix: true, locale: ru })}
                </span>
              </div>
              <p className="text-xs text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Chat
