import React from "react";
import { ShowList2 } from '../componnets/list'

export function Pop() {
  {
    ShowList2.map((items) => {
      return (
        <div className="flex justify-start mt-1 bg-transparent">
          <img
            className="size-6 mr-2"
            src="https://assets-in.bmscdn.com/m6/list-your-show/check.png"
          ></img>
          <p>{items.featlist}</p>
        </div>
      );
    });
  }
}
