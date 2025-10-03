import { Link2 } from "lucide-react"
import { ImageWithFallback } from './figma/ImageWithFallback'

export function IntegrationsSection() {
  // Integration platforms with working image URLs
  const integrations = [
    { name: "Integration 1", logo: "/logo3/Gmail.png" },
    { name: "Integration 2", logo: "/logo3/Google-Calendar.png" },
    { name: "Integration 3", logo: "/logo3/Outlook.png" },
    { name: "Integration 4", logo: "/logo3/Outlook-Calendar.png" },
    // Row 2: positions 4 and 5 will be merged for the text
    { name: "Integration 5", logo: "/logo3/Looker.png" },
    { name: "Integration 6", logo: "/logo3/Indeed.png" },
    { name: "Integration 7", logo: "/logo3/LinkedIn.png" },
    { name: "Integration 8", logo: "/logo3/Workday.png" },
    { name: "Integration 9", logo: "/logo3/SAP.png" },
    { name: "Integration 10", logo: "/logo3/OneDrive.png" },
  ]

  return (
    <>
      {/* Section Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <section className="pt-64 pb-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16 mt-24">
          {/* Standardized Badge */}
          <div className="inline-block p-[1px] bg-gradient-to-r from-[#0C8EFF]/60 via-[#9F62ED]/60 to-[#0C8EFF]/60 rounded-full shadow-lg mb-6 mt-16 md:mt-20 lg:mt-24">
            <div className="flex items-center bg-background/80 backdrop-blur-xl text-foreground px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium border-0 group transition-all duration-300">
              <Link2 className="w-4 h-4 text-foreground group-hover:text-[#0C8EFF] transition-colors duration-300 mr-3" strokeWidth={1.5} />
              <span className="text-foreground font-medium text-base">Seamless Integrations</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            <span className="block">Universal Integration</span>
            <span className="block bg-gradient-to-r from-[#0C8EFF] via-[#9F62ED] to-[#0C8EFF] bg-clip-text text-transparent">
              Across All Platforms
            </span>
          </h2>

        </div>

        {/* Integrations Table - 3x4 Grid using Flexbox */}
        <div className="mb-16 max-w-4xl mx-auto rounded-2xl overflow-hidden bg-background/40 backdrop-blur-md" 
             style={{ border: '2px solid rgba(107, 114, 128, 0.4)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '360px' }}>
            
            {/* Row 1 - 4 logos */}
            <div style={{ display: 'flex', height: '120px' }}>
              {integrations.slice(0, 4).map((integration, index) => (
                <div
                  key={`row1-${index}`}
                  className="group flex items-center justify-center transition-all duration-300 hover:bg-background/60 cursor-pointer"
                  style={{ 
                    flex: '1 1 25%',
                    height: '120px',
                    minHeight: '120px',
                    maxHeight: '120px',
                    borderBottom: '2px solid rgba(107, 114, 128, 0.4)',
                    borderRight: index < 3 ? '2px solid rgba(107, 114, 128, 0.4)' : 'none'
                  }}
                >
                  <div className="w-28 h-28 flex items-center justify-center">
                    <ImageWithFallback 
                      src={integration.logo}
                      alt={integration.name}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Row 2 - Logo, merged center text (2 columns), logo */}
            <div style={{ display: 'flex', height: '120px' }}>
              <div 
                className="group flex items-center justify-center transition-all duration-300 hover:bg-background/60 cursor-pointer"
                style={{ 
                  flex: '1 1 25%',
                  height: '120px',
                  minHeight: '120px',
                  maxHeight: '120px',
                  borderBottom: '2px solid rgba(107, 114, 128, 0.4)',
                  borderRight: '2px solid rgba(107, 114, 128, 0.4)'
                }}
              >
                <div className="w-28 h-28 flex items-center justify-center">
                  <ImageWithFallback 
                    src={integrations[4].logo}
                    alt={integrations[4].name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
              
              {/* Merged center cells - spans 2 columns */}
              <div 
                className="flex items-center justify-center"
                style={{ 
                  flex: '1 1 50%',
                  height: '120px',
                  minHeight: '120px',
                  maxHeight: '120px',
                  borderBottom: '2px solid rgba(107, 114, 128, 0.4)',
                  borderRight: '2px solid rgba(107, 114, 128, 0.4)'
                }}
              >
                <h3 className="text-2xl font-bold text-foreground text-center leading-tight">
                  Integrates with<br />tools you use
                </h3>
              </div>
              
              <div 
                className="group flex items-center justify-center transition-all duration-300 hover:bg-background/60 cursor-pointer"
                style={{ 
                  flex: '1 1 25%',
                  height: '120px',
                  minHeight: '120px',
                  maxHeight: '120px',
                  borderBottom: '2px solid rgba(107, 114, 128, 0.4)'
                }}
              >
                <div className="w-28 h-28 flex items-center justify-center">
                  <ImageWithFallback 
                    src={integrations[5].logo}
                    alt={integrations[5].name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Row 3 - 4 logos */}
            <div style={{ display: 'flex', height: '120px' }}>
              {integrations.slice(6, 10).map((integration, index) => (
                <div
                  key={`row3-${index}`}
                  className="group flex items-center justify-center transition-all duration-300 hover:bg-background/60 cursor-pointer"
                  style={{ 
                    flex: '1 1 25%',
                    height: '120px',
                    minHeight: '120px',
                    maxHeight: '120px',
                    borderRight: index < 3 ? '2px solid rgba(107, 114, 128, 0.4)' : 'none'
                  }}
                >
                  <div className="w-28 h-28 flex items-center justify-center">
                    <ImageWithFallback 
                      src={integration.logo}
                      alt={integration.name}
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Integration Description */}
        <div className="text-center mt-8 mb-20 max-w-3xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed">
            OrcHire.ai integrates seamlessly with the above tools and workflows - 
            and many more. No disruption, just enhanced capabilities across your entire hiring ecosystem.
          </p>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30 mt-32"></div>
    </section>
    </>
  )
}