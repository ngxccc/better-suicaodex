import NormalTag from "./normal-tag";

interface StatusChipProps {
  status: string;
  isLink?: boolean;
}

const StatusChip = ({ status, isLink = false }: StatusChipProps) => {
  const statusTextColor = {
    ongoing: "text-blue-500 dark:text-blue-400",
    completed: "text-green-500 dark:text-green-400",
    hiatus: "text-gray-500 dark:text-gray-400",
    cancelled: "text-red-500 dark:text-red-400",
  }[status];

  const statusOutline = {
    ongoing: "outline-blue-500 dark:outline-blue-400",
    completed: "outline-green-500 dark:outline-green-400",
    hiatus: "outline-gray-500 dark:outline-gray-400",
    cancelled: "outline-red-500 dark:outline-red-400",
  }[status];

  const statusBg = {
    ongoing: "bg-blue-500 dark:bg-blue-400",
    completed: "bg-green-500 dark:bg-green-400",
    hiatus: "bg-gray-500 dark:bg-gray-400",
    cancelled: "bg-red-500 dark:bg-red-400",
  }[status];

  return (
    <NormalTag
      className={`bg-default uppercase ${statusTextColor} outline-2 -outline-offset-2 outline-solid ${statusOutline} w-fit`}
    >
      <span className={`${statusBg} h-2 w-2 rounded-full`} />
      {isLink ? (
        <a
          href={`/advanced-search?status=${status}`}
          className="hover:underline"
        >
          {status}
        </a>
      ) : (
        status
      )}
    </NormalTag>
  );
};

export default StatusChip;
