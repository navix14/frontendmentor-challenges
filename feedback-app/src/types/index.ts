export type FeedbackType = {
  id: number;
  title: string;
  content: string;
  category: string;
  num_upvotes: number;
  num_comments: number;
};

export enum ButtonVariants {
  Purple,
  Blue,
}
