"use client";
import { useState } from "react";
import Header from "./header";
import Container from "./container";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Loader from "./ui/loader";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),

  message: z.string().min(1, {
    message: "Message must be at least 1 character.",
  }),
});

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = async (values: any) => {
    // try {
    //   setLoading(true);
    //   const res = await axios.post("/api/email", values);
    //   if (res.status === 200) {
    //     setSubmitted(true);
    //     setError(false); // Reset error state if submission is successful
    //   } else {
    //     setError(true);
    //     setSubmitted(false); // Reset submitted state if there's an error
    //   }
    // } catch (err) {
    //   setError(true);
    //   setSubmitted(false); // Reset submitted state if there's an error
    //   console.error(err);
    // } finally {
    //   setLoading(false);
    //   form.reset();
    // }
  };
  return (
    <Container className="py-28 flex justify-center bg-muted items-center flex-col space-y-10 text-white">
      <Header title="Contact Us" className="text-center" />
      <Card className="w-full max-w-3xl">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-20"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <p>
                        {" "}
                        <FormLabel>Name</FormLabel>
                      </p>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <p>
                        {" "}
                        <FormLabel>Email</FormLabel>
                      </p>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <p>
                        {" "}
                        <FormLabel>Message</FormLabel>
                      </p>
                      <FormControl>
                        <Textarea
                          disabled={loading}
                          placeholder="I'm interested in....."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              {/* {submitted && (
            <div className="bg-[#41ab5c] p-2 px-4 rounded text-white flex items-center text-sm lg:text-base">
              <MailCheck className="text-white mr-2" /> Thank you for your
              message, I’ll get back to you soon ...
            </div>
          )}

          {error && (
            <div className="bg-destructive p-2 px-4 rounded text-white flex items-center text-sm lg:text-base">
              <XCircle className="text-white mr-2" /> Message failed to send.
              Please try again :(
            </div>
          )} */}
              <Button size="lg" type="submit" disabled={loading}>
                {loading ? <Loader size={24} /> : <p>SUBMIT</p>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
}
