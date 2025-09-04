// app/api/hubspot/route.ts
import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID!;
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // No API key needed for Forms API v3
    const hubspotUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

    const hubspotData = {
      fields: [
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: name
        },
        {
          objectTypeId: "0-1", 
          name: "email",
          value: email
        },
        {
          objectTypeId: "0-1",
          name: "mobilephone",  // Note: using mobilephone not phone
          value: phone || ''
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: message || ''
        }
      ],
      context: {
        pageUri: request.headers.get('referer') || '',
        pageName: "AI Development Landing Page"
      }
    };

    const hubspotResponse = await fetch(hubspotUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hubspotData)
    });

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text();
      console.error('HubSpot error:', errorText);
      throw new Error('Failed to submit to HubSpot');
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}