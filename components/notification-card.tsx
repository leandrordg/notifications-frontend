"use client";

import { NotificationProps } from "@/app/(root)/(routes)/page";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NotificationCardProps {
  notification: NotificationProps;
}
const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  return (
    <div
      className={cn(
        "flex items-start gap-x-4 p-4 rounded-md",
        notification.featured && "bg-[#f7fafd]"
      )}
    >
      <Avatar className="cursor-pointer">
        <AvatarImage src={notification.avatar} />
      </Avatar>
      <div>
        <div className="flex items-center flex-wrap gap-x-1">
          <span className="font-bold hover:text-[#0a317b] cursor-pointer transition">
            {notification.name}
          </span>
          <span className="text-muted-foreground">{notification.message}</span>
          {!notification.isPrivateMessage && (
            <span
              className={cn(
                "text-muted-foreground font-bold",
                notification.isGroup && "text-[#0a317b] cursor-pointer"
              )}
            >
              {notification.messageExtra}
            </span>
          )}
          {notification.featured && <span className="text-red-500">•</span>}
        </div>

        <span className="text-sm text-muted-foreground">
          {notification.createdAt}
        </span>

        {notification.isPrivateMessage && (
          <div className="p-4 border rounded-sm mt-4 hover:bg-[#dde7ee] transition cursor-pointer">
            <span className="text-muted-foreground">
              {notification.messageExtra}
            </span>
          </div>
        )}
      </div>
      {notification.imageUrl && (
        <div className="ml-auto">
          <Image
            src={notification.imageUrl}
            alt="Imagem"
            width={40}
            height={40}
            className="min-w-[40px] h-10 object-cover"
          />
        </div>
      )}
    </div>
  );
};
export default NotificationCard;
