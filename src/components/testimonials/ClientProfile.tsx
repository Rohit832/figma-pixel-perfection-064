import React from 'react';

interface ClientProfileProps {
  name: string;
  title: string;
  avatar: string;
  className?: string;
}

export const ClientProfile: React.FC<ClientProfileProps> = ({
  name,
  title,
  avatar,
  className = ""
}) => {
  return (
    <div className={`flex items-stretch gap-[13px] ${className}`}>
      <img
        src={avatar}
        alt={`${name} profile`}
        className="aspect-[1.02] object-contain w-14 shrink-0 rounded-[43px]"
      />
      <div className="my-auto">
        <div className="font-semibold text-[15px] leading-[22px] text-black">
          {name}
        </div>
        <div className="text-[14px] leading-[24px] text-black">
          {title}
        </div>
      </div>
    </div>
  );
};
