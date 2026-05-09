import './PlayerYoutube.css'

interface PlayerYoutubeProps {
  youtubeId: string
  titulo?: string
}

export default function PlayerYoutube({ youtubeId, titulo }: PlayerYoutubeProps) {
  return (
    <div className="player-youtube">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}`}
        title={titulo || 'Vídeo'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
