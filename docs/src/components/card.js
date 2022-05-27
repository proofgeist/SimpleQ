import React from "react";

export default function Card({ header, body, footer }) {
  return (
    <div>
      <div class="card">
        <div class="card__header">{header}</div>
        <div class="card__body">{body}</div>
        <div class="card__footer">{footer}</div>
      </div>
    </div>
  );
}
