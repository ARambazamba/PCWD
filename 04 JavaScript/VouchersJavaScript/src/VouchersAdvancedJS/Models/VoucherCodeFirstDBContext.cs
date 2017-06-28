using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace VouchersAdvancedJS.Models
{
    public partial class VoucherCodeFirstDBContext : DbContext
    {
        public virtual DbSet<BalanceAccounts> BalanceAccounts { get; set; }
        public virtual DbSet<VoucherDetails> VoucherDetails { get; set; }
        public virtual DbSet<Vouchers> Vouchers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer(@"Server=.;Database=VoucherCodeFirstDB;Trusted_Connection=true;MultipleActiveResultSets=true");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BalanceAccounts>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<VoucherDetails>(entity =>
            {
                entity.HasIndex(e => e.AccountId)
                    .HasName("IX_VoucherDetails_AccountID");

                entity.HasIndex(e => e.VoucherId)
                    .HasName("IX_VoucherDetails_VoucherID");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.AccountId).HasColumnName("AccountID");

                entity.Property(e => e.VoucherId).HasColumnName("VoucherID");

                entity.HasOne(d => d.Account)
                    .WithMany(p => p.VoucherDetails)
                    .HasForeignKey(d => d.AccountId);

                entity.HasOne(d => d.Voucher)
                    .WithMany(p => p.VoucherDetails)
                    .HasForeignKey(d => d.VoucherId);
            });

            modelBuilder.Entity<Vouchers>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Amount).HasColumnType("decimal");
            });
        }
    }
}