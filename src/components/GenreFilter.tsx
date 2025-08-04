"use client";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useStore } from "@nanostores/react";
import {
  dramaGenreFilter,
  fictionGenreFilter,
  nonfictionGenreFilter,
  poetryGenreFilter,
} from "../lib/nanoStore";

export function GenreFilter({ genreType, genres }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const $fictionGenreFilter = useStore(fictionGenreFilter);
  const $nonfictionGenreFilter = useStore(nonfictionGenreFilter);
  const $dramaGenreFilter = useStore(dramaGenreFilter);
  const $poetryGenreFilter = useStore(poetryGenreFilter);

  function setGenreFilterValue(value) {
    setValue(value);
    if (genreType === "Fiction") {
      fictionGenreFilter.set(value);
    } else if (genreType === "Nonfiction") {
      nonfictionGenreFilter.set(value);
    } else if (genreType === "Drama") {
      dramaGenreFilter.set(value);
    } else {
      poetryGenreFilter.set(value);
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? genres.find((genre) => genre === value)
            : "Filter by Genre..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search genre..." />
          <CommandList>
            <CommandEmpty>No genre found.</CommandEmpty>
            <CommandGroup>
              {genres.map(
                (genre) =>
                  genre && (
                    <CommandItem
                      key={genre}
                      value={genre}
                      onSelect={(currentValue) => {
                        setGenreFilterValue(
                          currentValue === value ? "" : currentValue
                        );
                        setOpen(false);
                      }}
                    >
                      <CheckIcon
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === genre ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {genre}
                    </CommandItem>
                  )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
