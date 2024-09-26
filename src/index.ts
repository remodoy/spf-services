export type SpfServiceType = {
    name: string;
    rules: string[];
    description?: string;
    url?: string;
};

import { SpfServiceType } from "../types/spfServiceType";

const serviceProviders: SpfServiceType[] = [
    {
        name: "ActiveCampaign",
        rules: [".emsd1.com"],
    },
    {
        name: "ActiveCampaign Postmark",
        rules: ["spf.mtasv.net"],
    },
    {
        name: "Amazon SES",
        description: "Email sending as a service.",
        rules: ["amazonses.com"],
    },
    {
        name: "Campaign Monitor",
        url: "https://help.createsend.com/",
        rules: ["_spf.createsend.com"],
    },
    {
        name: "Freshdesk",
        description: "Customer support software",
        rules: [".freshdesk.com"],
    },
    {
        name: "Freshmail",
        rules: [".freshemail.io"],
    },
    {
        name: "Freshservice",
        rules: [".freshservice.com"],
    },
    {
        name: "F-Solutions Oy",
        rules: ["spf1.f-solutions.fi"],
    },
    {
        name: "Google",
        rules: ["_spf.google.com"],
    },
    {
        name: "Google Apps",
        rules: ["aspmx.googlemail.com"],
    },
    {
        name: "HubSpot",
        rules: [".hubspotemail.net"],
    },
    {
        name: "Kapsi.fi",
        rules: ["_spf.kapsi.fi"],
    },
    {
        name: "Liana",
        rules: ["spf.lianamailer.com"],
    },
    {
        name: "MailChimp",
        rules: [".mcsv.net"],
    },
    {
        name: "Mailgun",
        rules: [".mailgun.org"],
    },
    {
        name: "mailjet.com",
        rules: ["spf.mailjet.com"],
    },
    {
        name: "Mandrill",
        rules: ["spf.mandrillapp.com"],
    },
    {
        name: "Marketo",
        rules: ["mktomail.com"],
    },
    {
        name: "Microsoft 365",
        rules: ["spf.protection.outlook.com"],
    },
    {
        name: "Microsoft Outlook",
        rules: ["spf-a.hotmail.com", "spf-b.hotmail.com", "spf-a.outlook.com", "spf-b.outlook.com"],
    },
    {
        name: "Telia Nebula",
        url: "https://tuki.inmicsnebula.fi/spf-tietueet/",
        rules: ["spf.nebula.fi"],
    },
    {
        name: "Telia INWEB",
        url: "https://tuki.inmicsnebula.fi/spf-tietueet/",
        rules: ["_spf.inhosting.fi"],
    },
    {
        name: "Remod Oy",
        url: "https://remod.fi",
        rules: ["_spf.smtp-out.remod.fi", "_spf.remod.fi"],
    },
    {
        name: "Salesforce",
        rules: ["_spf.salesforce.com"],
    },
    {
        name: "SendGrid",
        rules: ["sendgrid.net"],
    },
    {
        name: "Shopify",
        rules: ["shops.shopify.com"],
    },
    {
        name: "OpenSRS",
        rules: ["registrarmail.net"],
    },
    {
        name: "TNNet",
        rules: ["spf.tnnet.fi"],
    },
    {
        name: "Webropol",
        rules: ["mail.webropolsurveys.com"],
    },
    {
        name: "Zendesk",
        rules: ["mail.zendesk.com"],
    },
];

function matchServiceProvider(service: SpfServiceType, value: string): boolean {
    return (
        service.rules.filter((rule) => {
            if (rule.startsWith(".")) {
                return value.endsWith(rule);
            }
            return value === rule;
        }).length > 0
    );
}

export function findServiceProvider(address: string): string | null {
    const services = serviceProviders.filter((service: SpfServiceType) => matchServiceProvider(service, address));
    if (services.length > 0) {
        return services[0].name;
    }
    return null;
}
