"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import Link from "next/link";

export function ProjectDialog({
  children,
  slug,
  title,
}: {
  children: ReactNode;
  slug: string;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function show(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    dialog.current?.showModal();
    setOpen(true);
  }
  function close() {
    dialog.current?.close();
  }
  return (
    <>
      <a
        ref={trigger}
        className="text-link"
        href={`/work/${slug}`}
        onClick={show}
        aria-haspopup="dialog"
        aria-label={`Explore case study: ${title}`}
      >
        Explore case study <span>↗</span>
      </a>
      <dialog
        ref={dialog}
        className="modal project-dialog"
        aria-label={title}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not(:disabled), select:not(:disabled), [tabindex="0"]',
          );
          const first = controls[0],
            last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            close();
        }}
      >
        <button
          className="close"
          aria-label="Close project details"
          onClick={close}
          autoFocus
        >
          ×
        </button>
        {open && children}
        <Link className="text-link mt-8" href={`/work/${slug}`} onClick={close}>
          Open full case study <span>↗</span>
        </Link>
      </dialog>
    </>
  );
}
