import NotificationCard from "@/components/notification-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface NotificationProps {
  name: string;
  avatar: string;
  message: string;
  messageExtra?: string;
  imageUrl?: string;
  createdAt: string;
  featured?: boolean;
  isGroup?: boolean;
  isPrivateMessage?: boolean;
}

const HomePage: React.FC = () => {
  const rawData: NotificationProps[] = [
    {
      name: "Mark Webber",
      avatar: "/avatar-mark-webber.webp",
      message: "reacted to your recent post",
      messageExtra: "My first tournament today!",
      createdAt: "1m ago",
      featured: true,
    },
    {
      name: "Angela Gray",
      avatar: "/avatar-angela-gray.webp",
      message: "followed you",
      createdAt: "5m ago",
      featured: true,
    },
    {
      name: "Jacob Thompson",
      avatar: "/avatar-jacob-thompson.webp",
      message: "has joined your group",
      isGroup: true,
      messageExtra: "Chess Club",
      createdAt: "1 day ago",
      featured: true,
    },
    {
      name: "Rizky Hasanuddin",
      avatar: "/avatar-rizky-hasanuddin.webp",
      message: "sent you a private message",
      messageExtra:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isPrivateMessage: true,
      createdAt: "5 days ago",
    },
    {
      name: "Kimberly Smith",
      avatar: "/avatar-kimberly-smith.webp",
      message: "commented on your picture",
      imageUrl: "/image-chess.webp",
      createdAt: "1 week ago",
    },
    {
      name: "Nathan Peterson",
      avatar: "/avatar-nathan-peterson.webp",
      message: "reacted to your recent post",
      messageExtra: "5 end-game strategies to increase your win rate",
      createdAt: "2 weeks ago",
    },
    {
      name: "Anna Kim",
      avatar: "/avatar-anna-kim.webp",
      message: "left the group",
      isGroup: true,
      messageExtra: "Chess Club",
      createdAt: "2 weeks ago",
    },
  ];

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl flex flex-1 flex-col max-w-3xl w-full h-screen md:h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h3 className="text-2xl font-semibold">Notifications</h3>
          <Badge variant="default">3</Badge>
        </div>
        <Button size="sm" variant="ghost">
          Mark all as read
        </Button>
      </div>
      <div className="flex flex-col gap-y-2 my-6 overflow-y-auto">
        {rawData.map((notification) => (
          <NotificationCard
            key={notification.name}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
