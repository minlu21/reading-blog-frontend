import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function BookList({ bookList }) {
  return (
    <ul id="bookList" className="grid grid-cols-2 gap-6">
      {bookList.map((tab, idx) => (
        <li key={idx}>
          <Tooltip>
            <TooltipTrigger>
              <a
                href={"/books/" + tab.slug.current}
                className={
                  tab.status === "Completed"
                    ? "text-green-700 line-through"
                    : tab.status === "In Progress"
                    ? "text-slate-900 underline font-bold"
                    : tab.status === "Abandoned"
                    ? "text-red-700 line-through"
                    : "text-slate-600"
                }
              >
                {tab.name}
              </a>{" "}
              <span>
                ({tab.publishYear}
                {tab.bc ? " B.C." : ""})
              </span>
            </TooltipTrigger>
            <TooltipContent>
              by {tab.authors[0].name}{" "}
              {tab.authors[1] ? ` and ${tab.authors[1].name}` : ""}
            </TooltipContent>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}
