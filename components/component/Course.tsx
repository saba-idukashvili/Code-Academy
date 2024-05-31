"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function Course() {
  const [videos, setVideos] = useState<any>([]);

  const getData = async () => {
    const { data } = await supabase.from("videos").select("*");

    if (data) {
      setVideos(data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {videos.map((v: any) => (
        <Card key={v.id}>
          <CardContent>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={v.imageURL}
                className="mt-4 w-full h-[300px] bg-cover rounded-md bg-muted"
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="text-gray-500 line-clamp-2 dark:text-gray-400 mt-2">
                {v.smDescription}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-500 dark:text-gray-400">
                    @{v.user}
                  </span>
                </div>
                <Link href={`/videos/${v.id}`}>
                  <Button>See More</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
