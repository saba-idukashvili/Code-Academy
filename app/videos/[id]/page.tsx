"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page({ params }: any) {
  const [video, setVideo] = useState<any>([]);

  const getVideo = async () => {
    const { data } = await supabase
      .from("videos")
      .select("*")
      .eq("id", params.id);
    if (data) {
      setVideo(data);
    }
  };
  useEffect(() => {
    getVideo();
  }, []);
  return video.map((v: any) => (
    <div key={v.id} className="grid px-3 gap-4 mt-8 max-w-2xl mx-auto">
      <Link href="/dashboard">
        <Button className="flex gap-1 items-center w-full" variant="outline">
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </Button>
      </Link>
      <div className="rounded-xl overflow-hidden aspect-video relative">
        <span className="w-full h-full rounded-md bg-muted" />
        <div className="absolute inset-x-0 bottom-0 text-white">
          <iframe
            className="md:w-full md:h-[365px] h-[190px] translate-x-2 md:translate-x-0 w-[336px] rounded-lg"
            width="560"
            height="315"
            src={v.URL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            alt="Thumbnail"
            className="rounded-full object-cover aspect-square"
            height="40"
            src="/placeholder.svg"
            width="40"
          />
          <div className="text-sm">
            <div className="font-medium">{v.user}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {v.subs}
            </div>
          </div>
        </div>
       <Link href={v.chanelURL}> <Button variant="outline">Subscribe</Button></Link>
      </div>
      <div className="bg-gray-100 rounded-xl p-4 text-sm dark:bg-gray-800">
        <p>{v.description}</p>
      </div>
    </div>
  ));
}
