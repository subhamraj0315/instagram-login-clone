import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home as HomeIcon, Search, PlusSquare, Heart, User, LogOut } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [followedUsers, setFollowedUsers] = useState<number[]>([]);

  const handleLogout = () => {
    navigate('/');
  };

  const toggleLike = (postIndex: number) => {
    setLikedPosts(prev => 
      prev.includes(postIndex) 
        ? prev.filter(i => i !== postIndex)
        : [...prev, postIndex]
    );
  };

  const toggleFollow = (userIndex: number) => {
    setFollowedUsers(prev =>
      prev.includes(userIndex)
        ? prev.filter(i => i !== userIndex)
        : [...prev, userIndex]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-[975px] mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="instagram-logo text-2xl">Instagram</h1>

          {/* Search */}
          <div className="hidden sm:flex items-center bg-secondary rounded-lg px-4 py-2 w-64">
            <Search size={16} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none ml-2 text-sm w-full placeholder:text-muted-foreground"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-5">
            <button className="hover:opacity-60 transition-opacity">
              <HomeIcon size={24} />
            </button>
            <button className="hover:opacity-60 transition-opacity sm:hidden">
              <Search size={24} />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <PlusSquare size={24} />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <Heart size={24} />
            </button>
            <button className="hover:opacity-60 transition-opacity">
              <User size={24} />
            </button>
            <button
              onClick={handleLogout}
              className="hover:opacity-60 transition-opacity text-destructive"
              title="Log out"
            >
              <LogOut size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[975px] mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Feed */}
          <div className="flex-1 max-w-[614px]">
            {/* Stories */}
            <div className="bg-card border border-border rounded-lg p-4 mb-6 overflow-x-auto">
              <div className="flex gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 min-w-[66px]">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gradient-start via-gradient-mid to-gradient-end p-[2px]">
                      <div className="w-full h-full rounded-full bg-card p-[2px]">
                        <div className="w-full h-full rounded-full bg-muted" />
                      </div>
                    </div>
                    <span className="text-xs truncate w-full text-center">user_{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            {Array.from({ length: 3 }).map((_, i) => (
              <article key={i} className="bg-card border border-border rounded-lg mb-4 animate-fade-in">
                {/* Post Header */}
                <div className="flex items-center gap-3 p-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gradient-start via-gradient-mid to-gradient-end p-[2px]">
                    <div className="w-full h-full rounded-full bg-card p-[1px]">
                      <div className="w-full h-full rounded-full bg-muted" />
                    </div>
                  </div>
                  <span className="font-semibold text-sm">instagram_user_{i + 1}</span>
                </div>

                {/* Post Image */}
                <div className="aspect-square bg-muted">
                  <img
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 100000}?w=600&h=600&fit=crop`}
                    alt="Post"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=600&fit=crop';
                    }}
                  />
                </div>

                {/* Post Actions */}
                <div className="p-3">
                  <div className="flex gap-4 mb-3">
                    <Heart 
                      className={`cursor-pointer hover:opacity-60 transition-all ${
                        likedPosts.includes(i) ? 'fill-destructive text-destructive scale-110' : ''
                      }`}
                      onClick={() => toggleLike(i)}
                    />
                    <svg
                      className="w-6 h-6 cursor-pointer hover:opacity-60 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 cursor-pointer hover:opacity-60 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                      />
                    </svg>
                  </div>
                  <p className="font-semibold text-sm mb-1">
                    {100 + i * 50 + (likedPosts.includes(i) ? 1 : 0)} likes
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">instagram_user_{i + 1}</span> This is a sample
                    post caption. #instagram #clone
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 uppercase">{i + 1} hours ago</p>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-[320px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-muted" />
              <div>
                <p className="font-semibold text-sm">your_username</p>
                <p className="text-sm text-muted-foreground">Your Name</p>
              </div>
              <button className="ml-auto text-xs font-semibold text-primary hover:text-foreground transition-colors">
                Switch
              </button>
            </div>

            <div className="flex justify-between mb-3">
              <span className="text-sm font-semibold text-muted-foreground">Suggestions For You</span>
              <button className="text-xs font-semibold hover:opacity-60 transition-opacity">
                See All
              </button>
            </div>

            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-muted" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">suggested_user_{i + 1}</p>
                  <p className="text-xs text-muted-foreground">Followed by user_{i + 2}</p>
                </div>
                <button 
                  onClick={() => toggleFollow(i)}
                  className={`text-xs font-semibold transition-colors ${
                    followedUsers.includes(i) 
                      ? 'text-muted-foreground' 
                      : 'text-primary hover:text-foreground'
                  }`}
                >
                  {followedUsers.includes(i) ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}

            <p className="text-xs text-muted-foreground/60 mt-6">
              © 2024 INSTAGRAM FROM META
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
