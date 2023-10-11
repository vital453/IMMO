/* eslint-disable no-unused-vars */
import React from "react";
import Panel from "../Panel";

const General = () => {
  return (
    <Panel extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Information General
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600 text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          obcaecati, consectetur harum placeat omnis minus dolore eaque natus
          numquam aut cumque iste hic architecto illo, est esse officia
          reiciendis aliquam commodi nam optio? Dolore quos atque tenetur
          expedita porro rem?
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Information 1</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Information 2</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Information 3</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Information 4</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Information 5</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
          Lorem ipsum dolor sit.
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Information 6</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Lorem ipsum dolor sit.
          </p>
        </div>
      </div>
    </Panel>
  );
};

export default General;
