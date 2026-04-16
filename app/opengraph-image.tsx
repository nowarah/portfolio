import { ImageResponse } from 'next/og'
import { personalInfo } from '@/lib/data'

export const runtime = 'edge'
export const alt = `${personalInfo.name} | ${personalInfo.title}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Accent glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'rgba(0,212,170,0.25)',
            filter: 'blur(80px)',
          }}
        />
        {/* Accent glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'rgba(100,100,255,0.2)',
            filter: 'blur(80px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            zIndex: 1,
          }}
        >
          {/* N symbol */}
          <div
            style={{
              width: 180,
              height: 180,
              background: '#0a0a0f',
              borderRadius: 36,
              border: '3px solid #00d4aa',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                color: '#00d4aa',
                fontSize: 110,
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              N
            </span>
          </div>

          {/* Title */}
          <span style={{ fontSize: 32, color: '#9ca3af' }}>
            {personalInfo.title}
          </span>

          {/* Tech pills */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['React.js', 'Next.js', 'TypeScript', 'PHP / Symfony'].map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '6px 20px',
                  background: 'rgba(0,212,170,0.1)',
                  border: '1px solid rgba(0,212,170,0.3)',
                  borderRadius: 999,
                  color: '#00d4aa',
                  fontSize: 18,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  )
}
