/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-teal-200">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Please read these terms carefully before using our platform. By
          accessing or using Skill Swap, you agree to be bound by these terms.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {/* Navigation / TOC - Sticky on Desktop */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24 bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl space-y-4">
            <CardHeader className="text-xl font-bold text-cyan-400">
              Contents
            </CardHeader>
            <Divider className="opacity-20" />
            <CardBody className="space-y-4 text-gray-300">
              <a
                href="#acceptance"
                className="block hover:text-cyan-400 transition-colors"
              >
                1. Acceptance of Terms
              </a>
              <a
                href="#accounts"
                className="block hover:text-cyan-400 transition-colors"
              >
                2. User Accounts
              </a>
              <a
                href="#content"
                className="block hover:text-cyan-400 transition-colors"
              >
                3. Content Ownership
              </a>
              <a
                href="#prohibited"
                className="block hover:text-cyan-400 transition-colors"
              >
                4. Prohibited Activities
              </a>
              <a
                href="#termination"
                className="block hover:text-cyan-400 transition-colors"
              >
                5. Termination
              </a>
            </CardBody>
          </Card>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Section
            id="acceptance"
            title="1. Acceptance of Terms"
            content="By accessing and using Skill Swap, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
          />

          <Section
            id="accounts"
            title="2. User Accounts"
            content="To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account and password and for restriction of access to your computer, and you agree to accept responsibility for all activities that occur under your account or password."
          />

          <Section
            id="content"
            title="3. Content Ownership"
            content="You retain all ownership rights to the content you upload to the platform. However, by uploading content, you grant Skill Swap a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content."
          />

          <Section
            id="prohibited"
            title="4. Prohibited Activities"
            content="You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or disclosing any part of the service in any medium; (ii) using any automated system, including without limitation 'robots,' 'spiders,' 'offline readers,' etc., to access the service; (iii) transmitting spam, chain letters, or other unsolicited email."
          />

          <Section
            id="termination"
            title="5. Termination"
            content="We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
          />

          <div className="pt-8">
            <Card className="bg-linear-to-br from-cyan-900/20 to-teal-900/20 border border-cyan-500/20 rounded-2xl">
              <CardBody className="text-center py-8">
                <p className="text-lg text-gray-200 mb-6">
                  Have questions about our Terms?
                </p>
                <Link href="/contact" className="btn-1 px-8 py-3 w-fit mx-auto">
                  Contact Support
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content: string;
}) => (
  <Card
    id={id}
    className={` bg-transparent border border-primary/20 backdrop-blur-xl hover:border-primary/30 transition-colors duration-30 p-4 rounded-2xl space-y-4`}
  >
    <CardHeader>
      <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
    </CardHeader>
    <Divider className="opacity-10" />
    <CardBody>
      <p className="text-gray-400 leading-relaxed text-lg">{content}</p>
    </CardBody>
  </Card>
);

export default TermsPage;
