"use client";

import {
  modelDeployments,
  modelLicensing,
  models,
  modelTypes,
  type ModelDeployment,
  type ModelLicensing,
  type ModelType,
} from "@/lib/models";

import { useMemo, useState } from "react";

export default function ModelsClient() {
  const [activeType, setActiveType] = useState<ModelType | "All">("All");
  const [activeLicensing, setActiveLicensing] = useState<
    ModelLicensing | "All"
  >("All");
  const [activeDeployment, setActiveDeployment] = useState<
    ModelDeployment | "All"
  >("All");

  const filteredModels = useMemo(() => {
    return models.filter((model) => {
      const typeMatch = activeType === "All" || model.modelType === activeType;
      const licensingMatch =
        activeLicensing === "All" || model.licensing === activeLicensing;
      const deploymentMatch =
        activeDeployment === "All" || model.deployment === activeDeployment;

      return typeMatch && licensingMatch && deploymentMatch;
    });
  }, [activeType, activeLicensing, activeDeployment]);

  const pillClass = (active: boolean) =>
    active
      ? "rounded-full border border-[#111827] bg-[#111827] px-4 py-2 text-sm font-medium text-white"
      : "rounded-full border border-[#ddd7cc] bg-white px-4 py-2 text-sm font-medium text-[#111827] transition hover:bg-[#f8f8f8]";

  return (
    <>
      <section className="border-t border-[#efeae1] px-6 py-8 md:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Filters
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Explore models by deployment reality
            </h2>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <div>
              <p className="mb-3 text-sm font-medium text-[#111827]">
                Model Type
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveType("All")}
                  className={pillClass(activeType === "All")}
                >
                  All
                </button>
                {modelTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={pillClass(activeType === type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-[#111827]">
                Licensing
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveLicensing("All")}
                  className={pillClass(activeLicensing === "All")}
                >
                  All
                </button>
                {modelLicensing.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveLicensing(item)}
                    className={pillClass(activeLicensing === item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium text-[#111827]">
                Deployment Style
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setActiveDeployment("All")}
                  className={pillClass(activeDeployment === "All")}
                >
                  All
                </button>
                {modelDeployments.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveDeployment(item)}
                    className={pillClass(activeDeployment === item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#efeae1] px-6 py-10 md:px-10">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#7c8b6b]">
              Model Library
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              {filteredModels.length} models matched
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-[#6b7280]">
            This section is meant to help evaluate the AI layer separately from
            the infrastructure layer, so model decisions stay clear instead of
            getting mixed into the hardware catalog.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredModels.map((model) => (
            <a
              key={model.slug}
              href={model.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-[24px] border border-[#e8e4dc] bg-[#fffdfa] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                  {model.modelType}
                </span>
                <span className="rounded-full bg-[#f9f7f2] px-3 py-1 text-xs font-medium text-[#6b7280]">
                  {model.licensing}
                </span>
                <span className="rounded-full bg-[#f9f7f2] px-3 py-1 text-xs font-medium text-[#6b7280]">
                  {model.deployment}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {model.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#6b7280]">
                {model.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {model.industries.slice(0, 3).map((industry) => (
                  <span
                    key={industry}
                    className="rounded-full border border-[#e3ddd1] px-3 py-1 text-xs font-medium text-[#111827]"
                  >
                    {industry}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                    Best For
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                    {model.bestFor.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7c8b6b]">
                    Black Scarab POV
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#6b7280]">
                    {model.blackScarabPov}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
