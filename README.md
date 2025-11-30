# Nerine Linux
### A Debian-based, gaming-focused, customizable Linux distribution.

Nerine OS is a modern Linux distribution built on top of **Debian (Testing)** and designed for users who want **high gaming performance**, **deep customization**, and **stable desktop environments** without sacrificing compatibility with the massive APT software ecosystem.

Nerine OS comes in **three editions**, each tailored for a different workflow and hardware class:

- **Nerine OS KDE Plasma Edition** — The flagship, focused on beauty, customization, and productivity.
- **Nerine OS XFCE Edition** — Lightweight, fast, low-latency edition ideal for gaming and older hardware.
- **Nerine OS GNOME Edition** — Modern, elegant, Wayland-optimized desktop with fluid animations.

Nerine OS also introduces several new system components designed to enhance performance, stability, and usability, making it a truly unique experience compared to its Debian base.

---

# 🚀 Key Goals

- Deliver **top-tier gaming performance** on Linux  
- Provide **three fully optimized desktop experiences**  
- Offer **unique customization tools** not found in Debian  
- Ensure long-term stability while maintaining modern packages  
- Improve usability for newcomers while retaining power for experts  
- Introduce a polished identity and visual experience through themes, branding, and UI consistency  

---

# ✨ New Features in Nerine OS

## 1. **NerineBoost Engine (Performance Manager)**
A custom optimization framework designed to automatically tune the system for gaming and heavy workloads.

**Features:**
- CPU governor switching (performance ↔ balanced ↔ power saver)  
- Adaptive RAM compression (zram / zstd)  
- Vulkan & DXVK optimization presets  
- Real-time process priority tuning  
- IO scheduler tuning (KYBER/BFQ)  
- Automatic compositor toggling  
- Low-latency audio configuration  
- NVIDIA/AMD auto-profile detection  

NerineBoost activates automatically when:
- A game launches  
- Steam/Proton titles are detected  
- Gamescope or MangoHUD is active  

And reverts gracefully when the session ends.

---

## 2. **NerineCustomizer (Global Customization Center)**

A new GUI application for managing global visual and performance customization across all editions.

**Users can customize:**
- Global accent and theme colors  
- KDE, GNOME, and XFCE theme presets  
- Window manager effects  
- System-wide blur and transparency  
- Dock and panel layouts  
- Icon themes and cursors  
- Login screen (GDM, SDDM, LightDM)  
- GRUB theme  
- Boot splash (Plymouth)  
- Live wallpapers (optional)  

This allows users to give Nerine a unified look across three very different desktop environments.

---

## 3. **Nerine Identity Layer (Branding System)**

Nerine OS replaces the entire Debian identity stack:

- `/etc/os-release` rewritten  
- Custom GRUB theme  
- Custom Plymouth splash  
- Custom LightDM/GDM/SDDM themes  
- New system icons  
- New default wallpapers (Neon Blossom Collection)  
- Nerine fonts and accent styles  
- Custom installer branding (Calamares)  

The OS feels **deeply unique** and visually modern compared to standard Debian.

---

## 4. **Updated Gaming Stack (Preconfigured)**

Nerine OS ships with a curated gaming layer that includes:

- Steam  
- Heroic Game Launcher  
- Lutris  
- ProtonUp-Qt  
- MangoHUD  
- vkBasalt  
- Gamescope  
- Wine + Wine Staging  
- Bottles (optional)  
- ESYNC/FSYNC enabled  
- Latest Mesa (for AMD/Intel)  
- Latest NVIDIA drivers  
- Latest Vulkan drivers and extensions  

All preconfigured:
- FPS counters  
- MangoHUD defaults  
- Steam Proton GE  
- Vulkan overlays  
- Feral GameMode support  

---

## 5. **Nerine Repo & Meta Packages**

To simplify maintenance, the project includes:

- `nerine-release` — Core system metadata  
- `nerine-keyring` — APT signing keys  
- `nerine-themes` — Icon, GTK, Plasma, XFWM, and GNOME Shell themes  
- `nerine-wallpapers` — High-resolution artwork  
- `nerine-desktop-kde` — Full KDE experience  
- `nerine-desktop-xfce` — Performance XFCE stack  
- `nerine-desktop-gnome` — Modern GNOME 45+ workflow  
- `nerine-boost` — Performance engine service  
- `nerine-live-config` — Defaults for live ISOs  

This allows you to roll updates independent of Debian.

---

# 🎮 Gaming Improvements

Nerine OS aims to provide one of the **best gaming experiences on a Debian-based system**, addressing Debian’s weaknesses in gaming:

### ✔ Newer Kernel  
Debian’s stock kernel is often outdated, so Nerine OS ships with:

- Linux Kernel 6.x (low-latency configurable)
- Optionally: Liquorix Kernel for high responsiveness  
- Optionally: XanMod Kernel for advanced gaming workloads  

 ✔ Newer Mesa  
Debian testing + backported Mesa ensure:

- Better Vulkan support  
- Higher FPS in AMD/Intel GPUs  
- Faster shader compilation  

 ✔ Preconfigured Proton & Steam  
- Proton GE included  
- DXVK & VKD3D up-to-date  
- Shader pre-caching enabled  
- GPU scheduling enhancements (AMD/NVIDIA)  

 ✔ Gamescope Integration  
Seamless support for:
- Game upscaling  
- HDR (future-ready)  
- Fullscreen scaling fixes  
- Input latency reduction  

 ✔ System Tweaks  
- CPU cores unparked  
- Latency reduction on GNOME/KDE  
- Optional compositor disabled in games  
- Audio latency reduced to <10ms  

Nerine OS aims to position itself as a **Debian-based alternative to Nobara, Bazzite, and Garuda Gaming Edition**, but more stable due to Debian’s architecture.

### Improvements

