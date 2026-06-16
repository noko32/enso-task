export type NotifIconType =
  | "mention"
  | "comment"
  | "newLead"
  | "assignment"
  | "task"
  | "calendar";

export type NotifBadge = "actionNeeded" | "slack";

export type IconVariant = "orange" | "gray" | "green";

export interface Notification {
  id: string;
  iconType: NotifIconType;
  iconVariant: IconVariant;
  title: string;
  description: string;
  timestamp: string;
  unread: boolean;
  badges: NotifBadge[];
}

export type TabId = "unread" | "all" | "trash";

export interface Tab {
  id: TabId;
  label: string;
  count: number;
}

export const TABS: Tab[] = [
  { id: "unread", label: "Unread", count: 7 },
  { id: "all", label: "All", count: 12 },
  { id: "trash", label: "Trash", count: 2 },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    iconType: "mention",
    iconVariant: "orange",
    title: "Alix mentioned you on Sarah Chen\u2019s message",
    description: "\u201c@Josh can you cover the reschedule? Out Thurs\u201d",
    timestamp: "22m",
    unread: true,
    badges: ["actionNeeded"],
  },
  {
    id: "2",
    iconType: "comment",
    iconVariant: "gray",
    title: "Alex Johnson left 3 comments on Round 2",
    description: "Budget feedback \u00b7 review before the Mar 19 call",
    timestamp: "40m",
    unread: false,
    badges: [],
  },
  {
    id: "3",
    iconType: "newLead",
    iconVariant: "orange",
    title: "Marcus Bell is a new lead",
    description: "via website calculator \u00b7 primary bath + kitchen",
    timestamp: "1h",
    unread: true,
    badges: ["actionNeeded", "slack"],
  },
  {
    id: "4",
    iconType: "comment",
    iconVariant: "gray",
    title: "Lauren assigned you the Emily Park conversation",
    description: "Cabinet finish samples \u2014 needs a reply",
    timestamp: "3h",
    unread: true,
    badges: ["actionNeeded"],
  },
  {
    id: "5",
    iconType: "task",
    iconVariant: "gray",
    title: "Colin commented on task Order cabinet samples \u2014 Torres",
    description: "\u201c@Josh confirm the walnut finish before I order\u201d",
    timestamp: "5h",
    unread: true,
    badges: ["actionNeeded"],
  },
];
