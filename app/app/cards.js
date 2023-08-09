import Image from 'next/image'

//Make actual Cards

// Add symbols border and background add font sizes and boldness
export function CardA(){
    return(
        <div>
            <div className="flex gap-2">
                <div className="flex">
                    <div>S</div>
                    <div> Extract</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Classify</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Q&A</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Analyze</div>
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex">
                    <div>S</div>
                    <div>API</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Email</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Embed</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>GDrive</div>
                </div>
            </div>
            <div className="flex gap-2">
                 <div className="flex">
                    <div>S</div>
                    <div>Airtable</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Sheets</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Zapier</div>
                </div>
                <div className="flex">
                    <div>S</div>
                    <div>Notion</div>
                </div>
            </div>
            <div>
                <div>Build end-to-end solutions</div>
                <div>Combine powerful AI tools with business logic, validations, and itegrations.</div>
            </div>
        </div>
    )
}


// Change image adjust font size and boldness
//The image may actually be something else as the text is touchable.
//Yeah looks like a bunch of lines are actually being made and connect each.
export function CardB(){
    return(
        <div>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <div>Workflows that work the way you do</div>
            <div>Create custom workflows that mirror your internal operations and let them run on autopilot -- no engineering resources required.</div>
        </div>
    )
}

//Image needs to be changed as would be imagined
//Font size and boldness needs changing
export function CardC(){
    return(
        <div>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <div>Human-in-the-loop confidence</div>
            <div>Extend comes with built-in confidence scoring and human-in-the-loop flows so you can confidently deploy into production.</div>
        </div>
    )
}

//Change image font size and boldness
export function CardD(){
    return(
        <div>
             <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            <div>Unlock any data type</div>
            <div>PDF, CSV, XLSX, IMG, HTML. You name it, Extend handles it. Even those messy handwritten doctor notes.</div>
        </div>
    )
}

//Make individual cards within this card
//Adjust font size and boldness
//add image
export function CardE(){
    return(
        <div>
            <div>
                <div>S</div>
                <div>Enterprise Ready</div>
            </div>
            <div>
                <div>On-Prem Deployment</div>
                <div>Deploy Extend on-premises entirely within your own cloud.</div>
            </div>
            <div>
                <div>SOC 2</div>
                <div>Extend is compliant with SOC2 policies (report on request).</div>
            </div>
            <div>
                <div>Data Protection</div>
                <div>Your data is always secure, encrypted, and never used for training purposes. Extend integrates with Azure OpenAI instances for additional protection.</div>
            </div>
            <div>
                <div>Security</div>
                <div>Extend comes with audit logs, granular permissions, and custom data retention policies to ensure compliance and security every step of the way.</div>
            </div>
        </div>
    )
}